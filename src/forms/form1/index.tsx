import { Form, Input } from 'antd';

const RpaForm1 = () => {
  return (
    <Form
      name="basic"
      labelCol={{ span: 2 }}
      wrapperCol={{ span: 8 }}
      autoComplete="off"
    >
      <Form.Item
        label="用户名"
        name="username"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export {
  RpaForm1
}