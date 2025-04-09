import React from "react"

interface StatusProps {
  status: string
}

const Status = ({status}: StatusProps) => {
  const statusVariant = (variant: string) => {
    let currentVariant = '';
    switch (variant) {
      case 'Pending':
        currentVariant = 'badge-warning'
        break;
      case 'ReOpened':
        currentVariant = 'badge-primary'
        break;
      case 'Completed':
        currentVariant = 'badge-success'
        break;
      default:
        currentVariant = 'badge-secondary'
        break;
    }
    return currentVariant
  }
  return (
    <div>
      <span className={`badge ${statusVariant(status)}`}>{status}</span>
    </div>
  )
}

export default Status