import { IObject } from '@pack/typings/baseType'

interface IBasePropsConfig {
  name: string
  label: string
  tag: string
  props: IObject
}

export const basePropsConfig: IBasePropsConfig[] = [
  {
    name: 'label',
    label: '标签',
    tag: 'AInput',
    props: {
      type: 'text',
      placeholder: '请输入标签'
    }
  },
  {
    name: 'field',
    label: '数据字段',
    tag: 'AInput',
    props: {
      type: 'text',
      placeholder: '请输入数据字段'
    }
  },
  {
    name: 'span',
    label: '栅格数',
    tag: 'ASlider',
    props: {
      max: 24,
      min: 0
    }
  },
  {
    name: 'width',
    label: '宽度',
    tag: 'AInput',
    props: {
      placeholder: '请输入数据字段'
    }
  }
]
