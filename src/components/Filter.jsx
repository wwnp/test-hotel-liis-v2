import React from 'react'
import { useForm } from 'react-hook-form';
import { ErrorHelper } from './ErrorHelper';
import { useDispatch, useSelector } from 'react-redux';
import { SET_REQUEST } from '../redux/contants';

export const Filter = () => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur'
  });
  const onSubmit = (data) => {
    dispatch({ type: SET_REQUEST, payload: data })
  };
  const { location, date, days } = useSelector(store => store.homepage.request)
  return (
    <form className='d-flex flex-column align-end justify-between text-center' onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group">
        <label className='form-label' htmlFor="username">Локация</label>
        <input
          {...register(
            'location', {
            required: 'Локация обязательна',
            minLength: 'Длина локации больше трех символов'
          })}
          className='form-control'
          type="text"
          defaultValue={location}
          maxLength={19}
        />
        <ErrorHelper type={errors?.location}></ErrorHelper>
      </div>

      <div className="input-group">
        <label className='form-label' htmlFor="password">Дата заселения</label>
        <input
          {...register('date', {
            required: 'Дата обязательна',
          })}
          className='form-control'
          type="date"
          id="date"
          defaultValue={date}
          min={new Date().toISOString().split("T")[0]}
        />
        <ErrorHelper type={errors?.date}></ErrorHelper>
      </div>

      <div className="input-group">
        <label className='form-label' htmlFor="username">Количество дней</label>
        <input
          {...register(
            'days', {
            required: 'Дни заселения обязательны',
          })}
          className='form-control'
          type="number"
          defaultValue={days}
          min={1}
          max={7}
        />
        <ErrorHelper type={errors?.days}></ErrorHelper>
      </div>

      <button
        className='btn btn-hotel btn-w100'
        type='submit'
      >
        Найти
      </button>
    </form>
  )
}
