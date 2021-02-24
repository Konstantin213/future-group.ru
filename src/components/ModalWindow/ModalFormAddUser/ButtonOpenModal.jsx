import React, {useState} from "react";
import {Button, Tooltip} from "antd";
import ModalFormAddUser from "./ModalFormAddUser";


export const FormModal = ({addNewUser}) => {

    const [visible, setVisible] = useState(false);

    const onCreate = formData => {
        addNewUser(formData)
        setVisible(false);
    };

    return (
        <div>
            <Tooltip title="Добавить нового пользователя">
    <span>
        <Button
            type="primary"
            onClick={() => {
                setVisible(true)
            }}>
                Добавить пользователя
            </Button>
    </span>
            </Tooltip>
            <ModalFormAddUser
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </div>
    );
};