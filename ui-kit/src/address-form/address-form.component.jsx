import React, { memo, useState, useRef, useCallback, useEffect } from 'react';
import {
	StyledAddressForm,
	StyledTextInput,
	StyledTextInputsRow,
	StyledSelect,
	StyledOption,
	StyledSelectWrapper,
	StyledBasketPayRow,
	StyledBasketSubmitButton,
	StyledBasketHeading3,
} from './address-form.styles';

const paymentMapper = {
	картой: 'CARD',
	наличными: 'CASH',
};

const AddressFormComponent = ({
	onSubmit = () => (event) => {
		event.preventDefault();
	},
	isError,
}) => {
	const [isSelectOpen, setIsSelectOpen] = useState(false);
	const [payMethodValue, setPayMethodValue] = useState('CARD');
	const [formState, setFormState] = useState({ payMethod: payMethodValue });
	const selectRef = useRef(null);
	const handleFieldChange = (event) => {
		setFormState({
			...formState,
			payMethod: payMethodValue,
			[event.target.name]: event.target.value,
		});
	};

	const handleSelectChange = (event) => {
		setPayMethodValue(paymentMapper[event.nativeEvent.target.value]);
		setFormState({
			...formState,
			payMethod: paymentMapper[event.nativeEvent.target.value],
		});
	};
	const handleSelectClick = () => setIsSelectOpen(!isSelectOpen);

	const handleMouseOutsideSelectClick = useCallback(
		(event) => {
			if (isSelectOpen && selectRef.current !== null && !selectRef.current.contains(event.target)) {
				setIsSelectOpen(false);
			}
		},
		[isSelectOpen, setIsSelectOpen]
	);

	useEffect(() => {
		const { body } = document;
		body.addEventListener('mousedown', handleMouseOutsideSelectClick);
		return () => {
			body.removeEventListener('mousedown', handleMouseOutsideSelectClick);
		};
	});
	return (
		<>
			<StyledBasketHeading3>Адрес доставки</StyledBasketHeading3>
			<StyledAddressForm onSubmit={onSubmit(formState)}>
				<StyledTextInputsRow>
					<StyledTextInput placeholder="адрес" name="address" onChange={handleFieldChange} />
				</StyledTextInputsRow>
				<StyledBasketHeading3>Заказчик</StyledBasketHeading3>
				<StyledTextInputsRow>
					<StyledTextInput placeholder="ФИО" name="name" onChange={handleFieldChange} />
				</StyledTextInputsRow>
				<StyledTextInput placeholder="телефон" name="phone" onChange={handleFieldChange} />
				<StyledBasketHeading3>Способ оплаты</StyledBasketHeading3>
				<StyledBasketPayRow>
					<StyledSelectWrapper onClick={handleSelectClick} isOpen={isSelectOpen}>
						<StyledSelect onChange={handleSelectChange} name="payment" ref={selectRef}>
							<StyledOption id="payment-option">картой</StyledOption>
							<StyledOption id="payment-option">наличными</StyledOption>
						</StyledSelect>
					</StyledSelectWrapper>
					<StyledTextInput
						placeholder="c какой суммы нужна сдача"
						disabled={payMethodValue === 'CARD'}
						name="changeSum"
						onChange={handleFieldChange}
					/>
				</StyledBasketPayRow>
				<StyledBasketSubmitButton disabled={isError}>Заказать</StyledBasketSubmitButton>
			</StyledAddressForm>
		</>
	);
};

export const AddressForm = memo(AddressFormComponent);
