import React from 'react';
import 'antd/dist/antd.css';
import {Spin} from 'antd';
import s from '../utilits/Loader.module.css'

const Spinner = (props) => {

    return (
        <Spin spinning={props.spinning} className={s.loader} size={'large'}
              tip="Данные загружаются...">
        </Spin>
    )
}

export default Spinner;