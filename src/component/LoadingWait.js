import React from "react";
import { View, Modal, ActivityIndicator} from "react-native"

export default function LoadingWait({visible}) {
    return(
        <Modal transparent visible={visible}>
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <ActivityIndicator
                size={'large'}
                color={'#a61a1d'}
                animating={true}
                />
            </View>
        </Modal>
    )
}