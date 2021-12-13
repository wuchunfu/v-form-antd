import { IAnyObject } from '@pack/typings/base-type'
import { Ref, SetupContext } from '@vue/composition-api'
import { FormModel } from 'ant-design-vue'
import { cloneDeep } from 'lodash-es'

export function useFormInstanceMethods(
  props: IAnyObject,
  context: SetupContext,
  formInstance: Ref<FormModel | null>
) {
  const { emit } = context

  /**
   * 表单校验方法
   * @param {((boolean: boolean, object: Object) => void) | undefined} callback
   * @return {void | Promise<any> | undefined}
   */
  const validate: FormModel['validate'] = callback =>
    formInstance.value?.validate(callback)

  /**
   * 对部分表单字段进行校验
   * @param props
   * @param callback
   */
  const validateField: FormModel['validateField'] = (props, callback) =>
    formInstance.value?.validateField(props, callback)

  /**
   * 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
   */
  const resetFields: FormModel['resetFields'] = () => formInstance.value?.resetFields()

  /**
   * 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果
   * @param props
   */
  const clearValidate: FormModel['clearValidate'] = props =>
    formInstance.value?.clearValidate(props)

  const submit = () => {
    return new Promise(resolve => {
      validate(valid => {
        if (!valid) return
        const data = cloneDeep(props.formData)
        emit('submit', data)
        props.formConfig.config.submit?.(data)
        resolve(data)
      })
    })
  }

  return {
    validate,
    validateField,
    resetFields,
    clearValidate,
    submit
  }
}
