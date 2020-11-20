<template>
  <div class="home">
    <!-- 账单操作区开始 -->
    <div class="actions">
      <el-button @click="openBillDialog">新建账单</el-button>
    </div>
    <!-- 账单操作区结束 -->
    <!-- 账单列表显示区开始 -->
    <div class="content">
      <el-table
        :data="billTable"
        show-summary
        class="bill-table"
      >
        <el-table-column
          prop="type"
          label="账单类型"
          :filters="typeOptions"
          :filter-method="filterTypes"
          width="100"
        >
          <template slot-scope="scope">{{scope.row.type === 0 ? "支出" : "收入"}}</template>
        </el-table-column>
        <el-table-column
          prop="time"
          label="账单时间"
          :filters="timeOptions"
          :filter-method="filterTime"
        >
        </el-table-column>
        <el-table-column
          prop="category"
          label="账单分类"
          :filters="categoryOptions"
          :filter-method="filterCategory"
        >
          <template slot-scope="scope">{{scope.row.category.name}}</template>
        </el-table-column>
        <el-table-column
          prop="amount"
          sortable
          label="账单金额(元)"
        >
        </el-table-column>
      </el-table>
    </div>
    <!-- 账单列表显示区结束 -->
    <!-- 账单详情操作弹窗开始 -->
    <el-dialog
      title="新建账单"
      width="80%"
      @close="onClose"
      :visible.sync="billDialogShow"
    >
      <el-form
        ref="form"
        :model="form"
      >
        <el-form-item
          label="账单分类"
          prop="category"
          :label-width="formLabelWidth"
        >
          <el-select
            v-model="form.category"
            @change="onChange"
            value-key="id"
            placeholder="请选择账单分类"
          >
            <el-option
              v-for="c in categories"
              :key="c.id"
              :label="c.name"
              :value="c"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="账单类型"
          prop="type"
          :label-width="formLabelWidth"
        >
          <el-select
            v-model="form.type"
            disabled
            placeholder="请选择账单类型"
          >
            <el-option
              v-for="t in typeOptions"
              :key="t.value"
              :label="t.text"
              :value="t.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="账单金额"
          prop="amount"
          :label-width="formLabelWidth"
        >
          <el-input-number
            v-model="form.amount"
            :min="0"
            label="金额"
          ></el-input-number>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="billDialogShow = false">取 消</el-button>
        <el-button
          type="primary"
          @click="addBill"
        >确 定</el-button>
      </div>
    </el-dialog>
    <!-- 账单详情操作弹窗结束 -->
  </div>
</template>

<script>
// @ is an alias to /src
import bill from "../assets/bill.csv";
import categories from "../assets/categories.csv";

export default {
  name: "Home",
  computed: {
    billTable() {
      return this.bill.map((item) => ({
        type: item.type,
        time: this.$dayjs(item.time).format("YYYY-MM-DD HH:mm:ss"),
        category: this.categories.find((c) => c.id == item.category),
        amount: item.amount.toFixed(2),
      }));
    },
  },
  data() {
    return {
      bill: bill,
      categories: categories,
      categoryOptions: categories.map((item) => ({
        value: item.id,
        text: item.name,
      })),
      timeOptions: [
        {
          value: "07",
          text: "7月",
        },
        {
          value: "08",
          text: "8月",
        },
        {
          value: "09",
          text: "9月",
        },
        {
          value: "10",
          text: "10月",
        },
        {
          value: "11",
          text: "11月",
        },
        {
          value: "12",
          text: "12月",
        },
      ],
      month: "",
      billDialogShow: false,
      typeOptions: [
        { text: "支出", value: 0 },
        { text: "收入", value: 1 },
      ],
      form: {
        amount: "",
        category: "",
        type: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    openBillDialog() {
      this.billDialogShow = true;
    },
    addBill() {
      this.bill.push({
        amount: this.form.amount,
        category: this.form.category.id,
        type: this.form.type,
        time: new Date("2019/07/01").getTime(),
      });
      this.billDialogShow = false;
      this.$message.success("新建成功");
    },
    onChange(category) {
      this.form.type = category.type;
    },
    onClose() {
      this.$refs["form"].resetFields();
    },
    filterTime(val, row, col) {
      let property = col["property"];
      let value = parseInt(val) - 1;
      return this.$dayjs(row[property]).month() === value;
    },
    filterTypes(val, row, col) {
      let property = col["property"];
      return row[property] === val;
    },
    filterCategory(val, row, col) {
      let property = col["property"];
      return row[property].id === val;
    },
  },
};
</script>
<style lang="scss">
.home {
  width: 80%;
  margin: 15px auto;
  .bill-table {
    width: 100%;
  }
}
</style>
