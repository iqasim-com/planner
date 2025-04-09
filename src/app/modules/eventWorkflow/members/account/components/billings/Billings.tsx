import React, {FC, useState} from "react";
import {PaymentMethods} from './cards/PaymentMethods'
import {BillingAddress} from './cards/BillingAddress'
import {BillingHistory} from './cards/BillingHistory'



type Props = {
}


const Billings: FC<Props> = () => {
    return (
        <>
            <PaymentMethods />
            <BillingAddress />
            <BillingHistory />
        </>
    )
}

export {Billings}