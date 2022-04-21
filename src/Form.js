import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from 'yup';

const MyTextInput = ({label, ...props}) => {

    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input {...props} {...field}/>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    )
};

const CustomForm = () => {
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                amount: 0,
                currency: '',
                text: '',
                terms: false
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                        .min(2, 'Min 2 symbols')
                        .required('Name is required'),
                email: Yup.string()
                        .email('Wrong email address')
                        .required('Email is required'),
                amount: Yup.number()
                        .min(5, 'Min 5!')
                        .required('Amount is required'),
                currency: Yup.string().required('Chose currency!'),
                text: Yup.string()
                        .min(10, 'Min 10 symbols'),
                terms: Yup.boolean()
                        .required('Terms are required!')
                        .oneOf([true], 'Terms are required!')
            })}
            onSubmit={values => console.log(JSON.stringify(values, null, 2))}
        >
            <Form className="form">
                <h2>Отправить пожертвование</h2>
                {/*Custom field*/}
                <MyTextInput
                    label="Ваше имя" 
                    id="name"
                    name="name"
                    type="text"  
                />
                <label htmlFor="email">Ваша почта</label>
                <Field
                    id="email"
                    name="email"
                    type="email"
                />
                <ErrorMessage className="error" name="email" component="div" />
                <label htmlFor="amount">Количество</label>
                <Field
                    id="amount"
                    name="amount"
                    type="number"
                />
                <ErrorMessage className="error" name="amount" component="div" />
                <label htmlFor="currency">Валюта</label>
                <Field
                    id="currency"
                    name="currency"
                    as="select">
                        <option value="">Выберите валюту</option>
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage className="error" name="currency" component="div" />
                <label htmlFor="text">Ваше сообщение</label>
                <Field 
                    id="text"
                    name="text"
                    as="textarea"
                />
                <ErrorMessage className="error" name="text" component="div" />
                <label className="checkbox">
                    <Field 
                        name="terms" 
                        type="checkbox"/>
                    Соглашаетесь с политикой конфиденциальности?
                </label>
                <ErrorMessage className="error" name="terms" component="div" />
                <button type="submit">Отправить</button>
            </Form>
        </Formik>
    )
}

export default CustomForm;