import React, { useEffect, useRef } from 'react'
import { renderAsync } from 'docx-preview'
import { getBlob } from '../utils'

interface Props {
  url: string
  fetchOption?: RequestInit
  callback?: (x: any) => any
  className?: string
  style?: React.CSSProperties
}
function DocsPreview(props: Props) {
  const { url, fetchOption, callback, className, style } = props
  const container = useRef<HTMLDivElement>()
  useEffect(() => {
    getBlob(url, fetchOption).then((blobData) => {
      if (container.current)
        renderAsync(blobData, container.current).then(x => typeof callback === 'function' ? callback(x) : undefined)
    })
  }, [url])
  return <div
    ref={container as React.MutableRefObject<HTMLDivElement>}
    className={`react-office-preview-word-container ${className}`}
    style={style}
  > </div>
}

export default DocsPreview
