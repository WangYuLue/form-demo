import React from 'react';
import { Tabs, Form, Input, Button, notification, message } from 'antd';
import data from './form.json';
import './app.scss';

const { TabPane } = Tabs;
const { TextArea } = Input;

interface IBase {
  title: string;
  formData: IFormData[];
}

interface IFormData {
  label: string;
  id: string;
  type?: 'input' | 'textarea'
}

interface IProps {
  data: IBase
}

const GenForm = (props: IProps) => {
  const { title, formData } = props.data;
  const onFinish = (values: any) => {
    message.success('提交成功');
    // notification.open({
    //   message: '表单提交成功',
    // });
  };
  return <Form
    name={title}
    labelCol={{ span: 3 }}
    wrapperCol={{ span: 8 }}
    onFinish={onFinish}
    autoComplete="off"
  >
    {
      formData.map(data => (
        <Form.Item
          label={data.label}
          name={data.id}
          key={data.id}
        >
          {
            data.type === 'textarea' ?
              <TextArea rows={6} style={{ width: '300px' }} id={data.id} /> :
              <Input style={{ width: '200px' }} id={data.id} />
          }
        </Form.Item>
      ))
    }
    <Form.Item wrapperCol={{ offset: 3, span: 8 }}>
      <Button type="primary" htmlType="submit">
        提交
      </Button>
    </Form.Item>
  </Form>
}

/**
 * title: 表单标题
 * label: 表单列 label
 * id: 表单列相应输入框 id
 * 
 * @deprecated
 */
const demoFormDatas = [
  {
    title: '中国银行远期结售汇牌价',
    formData: [
      {
        label: '货币名称',
        id: 'currencyName',
      },
      {
        label: '货币代码',
        id: 'currencyCode',
      },
      {
        label: '交易期限',
        id: 'transactionPeriod',
      },
      {
        label: '买入价',
        id: 'buyingPrice',
      },
      {
        label: '卖出价',
        id: 'sellingPrice',
      },
      {
        label: '中间价',
        id: 'middlePrice',
      },
      {
        label: '汇率日期',
        id: 'exchangeRateDate',
      },
    ]
  },
  {
    title: 'RPA 表单',
    formData: [
      {
        label: '用户名',
        id: 'username',
      },
      {
        label: '性别',
        id: 'gender',
      },
      {
        label: '公司',
        id: 'company',
      },
    ]
  },
  {
    title: '机器人表单',
    formData: [
      {
        label: '机器人名',
        id: 'robotname',
      },
      {
        label: 'IP 地址',
        id: 'ip',
      },
      {
        label: 'Mac 地址',
        id: 'mac',
      },
    ]
  }
]

const App = () => {
  return (
    <div id='app'>
      <Tabs defaultActiveKey="0">
        {
          data.map((demoFormData, index) => (
            <TabPane tab={demoFormData.title} key={index}>
              <GenForm data={demoFormData as IBase} />
            </TabPane>
          ))
        }
      </Tabs>
    </div>
  )
}

export {
  App
}