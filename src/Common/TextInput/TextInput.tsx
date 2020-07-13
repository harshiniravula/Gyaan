import React,{ Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import {
    StyledInput,
    StyledWrapper,
    StyledErrorInput,
    StyledErrorMessage
} from './styledComponents'

interface Props{
    value?:string
    validation:(value:string)=>{
        errorMessage:string
        hasError:boolean
    }
    type?:string
    placeholder?:string
}
@observer
class TextInput extends Component<Props> {
    @observable inputValue:string
    @observable hasError:boolean
    @observable errorMessage:string
    constructor(props){
        super(props);
        this.errorMessage=''
        this.hasError=false
        this.inputValue=props.value
    }
    static defaultProps={
        type:'text',
        placeholder:'',
        value:''
    }

    setValidation=(response)=>{
        const {errorMessage,hasError}=response
        this.errorMessage=errorMessage
        this.hasError=hasError
    }

    onChangeInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
        this.hasError=false
        this.inputValue  = e.target.value
    }
    
    checkValidation=(event: React.FocusEvent<HTMLInputElement>) =>{
        const {validation}=this.props
        const response = validation(event.target.value)
        this.setValidation(response)
    }
    
    getInputText=()=>{
        const {type,placeholder}=this.props;
        if(this.hasError){
            return(
                <StyledWrapper>
                    <StyledErrorInput
                    value={this.inputValue}
                    type={type}
                    onChange={this.onChangeInput}
                    placeholder={placeholder}
                    />
                    <StyledErrorMessage>
                        {this.errorMessage}
                    </StyledErrorMessage>
                </StyledWrapper>
            )
        }

        return (
            <StyledWrapper>
                <StyledInput 
                onBlur={this.checkValidation}
                value={this.inputValue}
                type={type}
                placeholder={placeholder}
                onChange={this.onChangeInput}
                />
            </StyledWrapper>
        );
    }
    render() {
        return (this.getInputText())
    }
}

export default TextInput;