import React, {useState} from 'react'
import {Table} from 'antd';
import {Modal} from 'antd';

const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        sorter: (a, b) => a.id - b.id,
        sortDirections: ['descend'],
    },
    {
        title: 'firstName',
        dataIndex: 'firstName',
        key: 'firstName  ',
        sorter: (a, b) => a.firstName.length - b.firstName.length,
        sortDirections: ['descend']
    },
    {
        title: 'lastName',
        dataIndex: 'lastName',
        key: 'lastName',
        sorter: (a, b) => a.lastName.length - b.lastName.length,
        sortDirections: ['descend']
    },
    {
        title: 'email',
        dataIndex: 'email',
        key: 'email',
        sorter: (a, b) => a.email.length - b.email.length,
        sortDirections: ['descend']
    },
    {
        title: 'phone',
        dataIndex: 'phone',
        key: 'phone',
        sorter: (a, b) => a.phone.length - b.phone.length,
        sortDirections: ['descend']
    },
];

const TableUsers = (props) => {

    const {users} = props

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <Table columns={columns}
                   dataSource={users}
                   expandable={{
                       expandedRowRender: record => <p style={{margin: 0}}>{record.description}</p>,
                   }}
                   onRow={() => {
                       return {
                           onClick: () => {
                               {
                                   showModal()
                               }
                           }
                       };
                   }}
            />
            <Modal title="User"
                   visible={isModalVisible}
                   onOk={handleOk}
                   onCancel={handleCancel}>
                В разработке
            </Modal>
        </div>
    )
}
export default TableUsers





