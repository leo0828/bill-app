import Vue from 'vue';
import {
    Button,
    Table,
    TableColumn,
    Select,
    Option,
    Dialog,
    Form,
    FormItem,
    InputNumber,
    Message,
} from 'element-ui';

Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Select)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(InputNumber)

Vue.prototype.$message = Message;