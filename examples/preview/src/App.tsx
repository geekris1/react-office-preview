
import './App.css'
import { Upload } from 'antd'
import { InboxOutlined } from '@ant-design/icons';
import { DocsPreview } from 'react-office-preview'
function App() {
  const { Dragger } = Upload;
  console.log('1111')
  return (
    <>
      <Dragger>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Only for file preview Files will not be uploaded anywhere.
        </p>
      </Dragger>
      <DocsPreview url="https://geekris1.oss-cn-beijing.aliyuncs.com/preview/test.docx"></DocsPreview>
    </>
  )
}

export default App
