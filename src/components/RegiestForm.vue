<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <div class="card" id="formCard">
      <div class="card-image">
        <img src="https://image.freepik.com/free-vector/cute-bride-groom-cartoon-wedding-invitation-card_21630-737.jpg" />
        <span class="card-title">
          Save the date
          <br />Join us to celebrate.
        </span>
      </div>
      <div class="card-content left-align">
        <div class="row">
          <h5>您的大名? (真實姓+名)</h5>
          <div class="input-field col s12">
            <Field name="fullName" as="input" type="text" v-model="regiestForm.fullName" />
            <label for="fullName">您的回答</label>
            <ErrorMessage name="fullName" class="error" />
          </div>
        </div>

        <div class="row">
          <h5>您的聯絡電話?</h5>
          <div class="input-field col s12">
            <Field name="phoneNumber" as="input" type="text" v-model="regiestForm.phoneNumber" />
            <label for="phoneNumber">您的回答</label>
            <ErrorMessage name="phoneNumber" class="error" />
          </div>
        </div>
        <div class="row attend--field">
          <h5>您和新人的關係是?</h5>
          <div class="radio--group p-l-5">
            <p>
              <label>
                <Field name="relation" as="input" type="radio" value="男方親友" v-model="regiestForm.relation" />
                <span>男方親友</span>
              </label>
            </p>
            <p>
              <label>
                <Field name="relation" as="input" type="radio" value="女方親友" v-model="regiestForm.relation" />
                <span>女方親友</span>
              </label>
            </p>
          </div>
          <ErrorMessage name="relation" class="error" />
        </div>
        <div class="row">
          <h5>是否願意與參加婚禮？</h5>
          <div class="radio--group p-l-5">
            <p>
              <label>
                <Field name="attendWedding" as="input" type="radio" value="這是一定要的！" v-model="regiestForm.attendWedding" />
                <span>這是一定要的！</span>
              </label>
            </p>
            <p>
              <label>
                <Field name="attendWedding" as="input" type="radio" value="時間上來不及參加" v-model="regiestForm.attendWedding" />
                <span>時間上來不及參加</span>
              </label>
            </p>
            <p>
              <label>
                <Field name="attendWedding" as="input" type="radio" value="參加婚宴就好" v-model="regiestForm.attendWedding" />
                <span>參加婚宴就好</span>
              </label>
            </p>
            <p>
              <label>
                <Field name="attendWedding" as="input" type="radio" value="無法出席，祝你們幸福滿滿" v-model="regiestForm.attendWedding" />
                <span>無法出席，祝你們幸福滿滿</span>
              </label>
            </p>
            <ErrorMessage name="attendWedding" class="error" />
          </div>
        </div>
        <div class="row" v-if="['這是一定要的！', '時間上來不及參加', '參加婚宴就好'].includes(regiestForm.attendWedding)">
          <h5>是否願意與參加午宴？</h5>
          <div class="radio--group p-l-5">
            <p>
              <label>
                <Field name="attendEvent" as="input" type="radio" value="拜託，我一定要參加！" v-model="regiestForm.attendEvent" />
                <span>拜託，我一定要參加！</span>
              </label>
            </p>
            <p>
              <label>
                <Field name="attendEvent" as="input" type="radio" value="禮到人不到，請寄喜帖給我！" v-model="regiestForm.attendEvent" />
                <span>禮到人不到，請寄喜帖給我！</span>
              </label>
            </p>
            <p>
              <label>
                <Field name="attendEvent" as="input" type="radio" value="有事無法出席，祝你們幸福滿滿" v-model="regiestForm.attendEvent" />
                <span>有事無法出席，祝你們幸福滿滿</span>
              </label>
            </p>
            <ErrorMessage name="attendEvent" class="error" />
          </div>
        </div>
        <div class="row attend--field" v-if="regiestForm.attendEvent == '拜託，我一定要參加！'">
          <h5>當天出席人數</h5>
          <div>
            <select name="attendPeople" as="select" v-model="regiestForm.attendPeople">
              <option value="1">1 人</option>
              <option value="2">2 人</option>
              <option value="3">3 人</option>
              <option value="4">4 人</option>
              <option value="5">5 人</option>
            </select>
          </div>
          <ErrorMessage name="attendPeople" class="error" />
        </div>
        <div class="row attend--field" v-if="regiestForm.attendEvent == 1">
          <h5>是否需要準備兒童座椅?</h5>
          <div class="radio--group p-l-5">
            <Field name="child" as="select" v-model="regiestForm.child">
              <option value="不需要" selected>不需要</option>
              <option value="1">1 張</option>
              <option value="2">2 張</option>
              <option value="3">3 張</option>
            </Field>
          </div>
          <ErrorMessage name="attendPeople" class="error" />
        </div>
        <div class="row attend--field" v-if="regiestForm.attendEvent == '拜託，我一定要參加！'">
          <h5>是否需要安排素食餐點？</h5>
          <div class="radio--group p-l-5">
            <div class="switch">
              <label>
                否
                <input type="checkbox" v-model="regiestForm.vegetarian" />
                <span class="lever"></span>
                是
              </label>
            </div>
          </div>
          <div v-if="regiestForm.vegetarian">
            <h5>人數</h5>
            <div class="radio--group p-l-5">
              <Field name="vegetarianNumber" as="select" v-model="regiestForm.vegetarianNumber">
                <option value="1">1 人</option>
                <option value="2">2 人</option>
                <option value="3">3 人</option>
                <option value="4">4 人</option>
                <option value="5">5 人</option>
              </Field>
            </div>
          </div>
        </div>
        <div class="row attend--field send--invited" v-if="['拜託，我一定要參加！', '禮到人不到，請寄喜帖給我！'].includes(regiestForm.attendEvent)">
          <h5>喜帖寄送方式：</h5>
          <div class="radio--group p-l-5">
            <p>
              <label>
                <Field name="inviteType" as="input" type="radio" value="請寄給我喜帖 ~ 讓我珍藏" v-model="regiestForm.inviteType" />
                <span>請寄給我喜帖 ~ 讓我珍藏 ❤️</span>
              </label>
            </p>
            <p>
              <label>
                <Field name="inviteType" as="input" type="radio" value="愛護地球，請寄給我電子喜帖" v-model="regiestForm.inviteType" />
                <span>愛護地球，請寄給我電子喜帖</span>
              </label>
            </p>
          </div>
          <div class="input-field col s12" v-if="regiestForm.inviteType == '請寄給我喜帖 ~ 讓我珍藏'">
            <Field name="inviteAddress" as="input" type="text" v-model="regiestForm.inviteAddress" />
            <label for="inviteAddress">喜帖收件地址 (含郵遞區號)</label>
          </div>
          <ErrorMessage name="inviteAddress" class="error" />
          <div class="input-field col s12" v-if="regiestForm.inviteType == '愛護地球，請寄給我電子喜帖'">
            <Field name="inviteEmailAddress" as="input" type="text" v-model="regiestForm.inviteEmailAddress" />
            <label for="inviteEmailAddress">喜帖收件電子地址</label>
          </div>
          <ErrorMessage name="inviteEmailAddress" class="error" />
        </div>
        <div class="row">
          <h5>想對我們說的話 ❤️</h5>
          <blockquote style="border-left: 5px solid #26a69a">當天會將您的祝福放在大螢幕上哦~</blockquote>
          <div class="radio--group p-l-5">
            <div class="input-field col s12">
              <textarea id="textarea1" class="materialize-textarea" v-model="regiestForm.message"></textarea>
              <label for="textarea1">您的悄悄話</label>
            </div>
          </div>
        </div>
        <div class="row attend--field">
          <h5>溫馨小提醒</h5>
          <blockquote>如果您已送出表單，但有要更改，再麻煩提前說一聲哦！</blockquote>
        </div>
        <div class="card-action center-align">
          <button class="btn waves-effect waves-light" type="submit">送出</button>
        </div>
      </div>
    </div>
  </Form>
</template>
<script>
import { reactive } from 'vue';
import { Field, Form, ErrorMessage } from 'vee-validate';
//import { onMounted } from 'vue';
//import * as yup from 'yup';
import axios from 'axios';

export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup(props, context) {
    const regiestForm = reactive({});
    const onSubmit = (values) => {
      //alert(JSON.stringify(values));
      saveItem(values);
    };
    /*const schema = yup.object().shape({
      fullName: yup.string().required(),
      phoneNumber: yup.string().required(),
    });*/

    const schema = {
      fullName: 'required',
      phoneNumber: 'required',
    };

    const app_id = 'appUMOrxs0RPZWGOb';
    const app_key = 'key16kn7UkbmpRrJ6';
    const airTableName = 'WeddingForm';

    const saveItem = (item) => {
      let data = {
        fields: {
          姓名: item.fullName,
          連絡電話: item.phoneNumber,
          與新人關係: item.relation,
          是否願意參加婚禮: item.attendWedding,
          是否願意參加午宴: item.attendEvent,
          當天出席人數: item.attendPeople,
          是否需準備兒童座椅: item.child,
          是否需要安排素食餐點: item.vegetarian,
          素食人數: item.vegetarianNumber,
          喜帖寄送方式: item.inviteType,
          地址: item.inviteAddress,
          電子郵件: item.inviteEmailAddress,
          想對我們說的話: item.message,
        },
      };
      //console.log(JSON.stringify(data));

      // save the record
      axios.post(`https://api.airtable.com/v0/${app_id}/${airTableName}`, data, { headers: { Authorization: 'Bearer ' + app_key, 'Content-Type': 'application/json' } }).then((response) => {
        console.log(response);
        if (!!response && !!response.data.id) {
          alert('儲存成功');
          Object.assign(regiestForm, {});
        }
      });
    };
    return {
      onSubmit,
      schema,
      regiestForm,
    };
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
select {
  display: inherit;
}
#lineForm {
  padding: 5px 1rem;
}
#formCard {
  max-width: 512px;
  margin: 0.5em auto;
}
button {
  background-color: #4285f4;
}
.p-l-5 {
  padding: 5px;
}
.input-field {
  margin-top: 10px;
}
.radio--group p {
  padding: 5px 0;
}
.error {
  color: #f44336;
}
</style>
