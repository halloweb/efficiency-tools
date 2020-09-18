<template>
    <a-modal
    title="项目信息"
    style="top: 20px;"
    :visible="modalVisible"
    @ok="confirm"
    @cancel="$emit('input', false)"
  >
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
   <a-form-model-item ref="name" label="项目名称" prop="name">
      <a-input
        v-model="form.name"
        @blur="
          () => {
            $refs.name.onFieldBlur();
          }
        "
      />
    </a-form-model-item>
    <a-form-model-item ref="localPath" label="本地项目路径" prop="localPath">
      <a-input
        v-model="form.localPath"
        @blur="
          () => {
            $refs.localPath.onFieldBlur();
          }
        "
      />
    </a-form-model-item>
    <a-form-model-item ref="serverIP" label="服务器ip" prop="serverIP">
      <a-input
        v-model="form.serverIP"
        @blur="
          () => {
            $refs.serverIP.onFieldBlur();
          }
        "
      />
    </a-form-model-item>
    <a-form-model-item ref="serverPath" label="服务器部署路径" prop="serverPath">
      <a-input
        v-model="form.serverPath"
        @blur="
          () => {
            $refs.serverPath.onFieldBlur();
          }
        "
      />
    </a-form-model-item>
    <a-form-model-item ref="backupPath" label="服务器备份路径" prop="backupPath">
      <a-input
        v-model="form.backupPath"
        @blur="
          () => {
            $refs.backupPath.onFieldBlur();
          }
        "
      />
    </a-form-model-item>
    <a-form-model-item label="备注" prop="desc">
      <a-input v-model="form.desc" type="textarea" />
    </a-form-model-item>
  </a-form-model>
  </a-modal>
</template>

<script>
export default {
  props: {
    value: Boolean,
    formData: Object
  },
  data () {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: '',
      form: {
        name: '',
        localPath: '',
        serverIP: '',
        serverPath: '',
        backupPath: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入项目名称', trigger: 'blur' }
        ],
        localPath: [
          { required: true, message: '请输入项目本地路径', trigger: 'blur' }
        ],
        serverIP: [
          { required: true, message: '请输入服务器ip', trigger: 'blur' }
        ],
        serverPath: [
          { required: true, message: '请输入服务器部署路径', trigger: 'blur' }
        ],
        backupPath: [
          { required: true, message: '请输入服务器备份路径', trigger: 'blur' }
        ],
        desc: [{ required: true, message: '请输入项目描述', trigger: 'blur' }]
      }
    }
  },
  watch: {
    value () {
      if (this.value) {
        if (this.formData) {
          this.form = this.formData
        } else {
          this.form = this.$options.data().form
        }
      }
    }
  },
  methods: {
    confirm () {

    },
    onSubmit () {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm () {
      this.$refs.ruleForm.resetFields()
    }
  }
}
</script>

<style>

</style>
