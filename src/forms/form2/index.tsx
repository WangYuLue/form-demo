import { Form, Input } from 'antd';

const RpaForm2 = () => {
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
        <Input style={{ width: '200px' }} id={'username'} />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
      >
        <Input style={{ width: '200px' }} id={'password'} />
      </Form.Item>
    </Form>
  );
};

export {
  RpaForm2
}