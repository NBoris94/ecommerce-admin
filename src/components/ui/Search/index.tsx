import {FC, FormEvent, useEffect, useState} from "react";
import {SearchProps} from "@/components/ui/Search/Search.interfaces";
import {useRouter} from "next/router";
import {useDebounce} from "@/hooks/useDebounce";
import Button from "@/components/ui/Button";

const Search: FC<SearchProps> = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState<string>(router.query?.search as string || '')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push({pathname: router.pathname, query: { ...router.query, search: searchTerm}})
  }

  return (
    <form className="col-3" onSubmit={handleSubmit}>
      <input
        className="form-control"
        type="search"
        placeholder="Поиск"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value) }
      />
      <Button type="submit">Поиск</Button>
    </form>
  )
}

export default Search
