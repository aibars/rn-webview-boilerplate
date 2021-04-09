import React from 'react';
import { View, TouchableOpacity, Modal, SafeAreaView, Text, StyleSheet } from 'react-native';
import { WebView, WebViewMessageEvent } from 'react-native-webview';


interface IWebViewWrapperState {
    showView: boolean;
}

export class WebViewWrapper extends React.PureComponent<{}, IWebViewWrapperState> {
    public state = {
        showView: false
    };

    private webView: WebView;

    public onMessage = (event: WebViewMessageEvent) => {
        console.log(event.nativeEvent.data);
    }

    public render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.setState({ showView: true })}>
                    <View style={this.styles.buttonContainer}>
                        <Text style={{ color: 'white' }}>Open WebView</Text>
                    </View>
                </TouchableOpacity>
                <Modal animationType="slide" transparent={false} visible={this.state.showView} onRequestClose={() => this.setState({ showView: false })}>
                    <View style={this.styles.modalContainer}>
                        <View style={this.styles.webViewContainer}>
                            <WebView
                                ref={ref => (this.webView = ref)}
                                source={require('./assets/test.html')}
                                onMessage={this.onMessage}
                                originWhitelist={['*']}
                                javaScriptEnabled={true}
                                cacheEnabled={true}
                                allowFileAccess={true}
                            />
                        </View>
                        <SafeAreaView style={this.styles.cancelButtonContainer}>
                            <TouchableOpacity style={this.styles.cancelButton} disabled={false} activeOpacity={0.7} onPress={() => this.setState({ showView: false })}>
                                <Text style={{ color: 'white' }}>Close</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                    </View>
                </Modal >
            </View>
        );
    }

    private styles = StyleSheet.create({
        buttonContainer: {
            flexDirection: 'row',
            alignSelf: 'flex-start',
            minHeight: 50,
            minWidth: 120,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            backgroundColor: '#414141',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center'
        },
        modalContainer: {
            flex: 1,
            marginBottom: 5
        },
        webViewContainer: {
            flex: 1
        },
        cancelButton: {
            minHeight: 50,
            width: '48%',
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginRight: '1%',
            borderRadius: 5,
            backgroundColor: '#F41228',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center'
        },
        cancelButtonContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            paddingHorizontal: '2%',
            width: '100%',
            paddingTop: '2%'
        }
    });
}