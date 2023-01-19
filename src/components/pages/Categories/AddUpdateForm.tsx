import {FC, useState} from "react"
import {Field, Form, Formik, FormikValues} from "formik"
import {useGetCategoriesQuery} from "@/store/category/categoryApi"
import {ICategory} from "@/types/category"
import {AddUpdateFormProps} from "./Categories.interfaces";
import {is} from "immutable";

const INITIAL_FORM_STATE: ICategory = {
  id: 0,
  name: '',
  description: '',
  category_id: '',
  isHidden: false,
  filters: [],
  seo: {
    seoTitle: '',
    seoDescription: '',
    seoKeywords: ''
  }
}

const AddUpdateForm: FC<AddUpdateFormProps> = (
  {
    formState,
    onSubmit
  }) => {
  const {data: result, isLoading, isError, error} = useGetCategoriesQuery({ page: 0, search: ''})

  return (
    <Formik
      initialValues={formState || INITIAL_FORM_STATE}
      onSubmit={(values) => onSubmit(values)}
    >
      <Form>
        <div className="mb-3">
          <label className="form-label" htmlFor="name" >Название</label>
          <Field
            className="form-control"
            id="name"
            name="name"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="description">Описание</label>
          <Field
            className="form-control"
            id="description"
            name="description"
            as="textarea"
          />
        </div>
        {
          <div className="mb-3">
            <label className="form-label" htmlFor="category_id">Родительская категория</label>
            {
              isLoading
                ? <p>Загрузка</p>
                : isError
                  ? <p>Ошибка</p>
                  : (
                    <Field
                      className="form-select"
                      id="category_id"
                      name="category_id"
                      as="select"
                    >
                      <option value={0}>Выберите категорию</option>
                      {result?.categories.data.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                    </Field>
                  )
            }
          </div>
        }
        <button type="submit" className="btn btn-primary" disabled={isLoading || isError}>Сохранить</button>
      </Form>
    </Formik>
  )
}

export default AddUpdateForm
