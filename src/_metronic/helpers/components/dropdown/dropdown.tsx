import React from 'react'
import { Dropdown } from 'react-bootstrap'

const DropdownWithButton = ({ data, handleClick, assignees }: any) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline" id="dropdown-basic">
        <i className="fa fa-gear text-primary"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className="mb-4">
          {data?.data?.clients?.map((client: any) => {
            const matchingAssignee = assignees?.find(
              (assignee: any) => client.firstName === assignee.firstName
            )

            if (matchingAssignee) {
              return (
                <div
                  className="border border-left-0 border-top-0 border-right-0"
                  key={client.clientId}
                >
                  <Dropdown.Item disabled onClick={() => handleClick(client)}>
                    <i className='fa fa-check text-success'></i> {`${client.firstName} ${client.lastName}`}
                  </Dropdown.Item>
                </div>
              )
            } else {
              return (
                <div
                  className="border border-left-0 border-top-0 border-right-0"
                  key={client.clientId}
                >
                  <Dropdown.Item onClick={() => handleClick(client)}>
                    {`${client.firstName} ${client.lastName}`}
                  </Dropdown.Item>
                </div>
              )
            }
          })}
        </div>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownWithButton
