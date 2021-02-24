import React, {useEffect, useState} from 'react'
import {Button, Input} from 'antd';
import 'antd/dist/antd.css';
import s from '../PrimaryPage/PrimaryPage.module.css'
import TableUsers from "../Table/Table";
import {useDispatch, useSelector} from "react-redux";
import {addUser, getBigData, getSmallData, searchUser} from "../redux/PrimaryPageReducer";
import {FormModal} from "../ModalWindow/ModalFormAddUser/ButtonOpenModal";
import Spinner from "../utilits/Loader";

const {Search} = Input;


const PrimaryPage = () => {

    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(useSelector(state => state.primaryPage.isLoading))

    const users = useSelector(state => state.primaryPage.users);

    const addNewUser = (formValues) => dispatch(addUser(formValues));

    const userSearch = (value) => dispatch(searchUser(value));

    const getDataSmall = () => {
        setIsLoading(true)
        dispatch(getSmallData(setIsLoading))
    }
    const getDataBig = () => {
        setIsLoading(true)
        dispatch(getBigData(setIsLoading))
    }

    const onSearch = (value) => {
        userSearch(value)
    };

    return (
        <div className={s.container}>
            <Spinner spinning={isLoading}/>
            <div className={s.button}>
                <FormModal addNewUser={addNewUser}/>

                <Search
                    maxLength={20}
                    placeholder="Enter firstName to User"
                    onSearch={onSearch}
                    style={{width: 200}}
                />
                <Button
                    type="primary"
                    onClick={() => {
                        getDataSmall()
                    }}>
                    Малый объем данных
                </Button>
                <Button
                    type="primary"
                    onClick={() => {
                        getDataBig()
                    }}>
                    Большой объем данных
                </Button>
            </div>
            <div>
                <TableUsers users={users}/>
            </div>
        </div>
    )
}

export default PrimaryPage

