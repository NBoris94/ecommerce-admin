import {ReactNode, TableHTMLAttributes} from "react";

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
}

export interface TableHeaderProps {
  children: ReactNode
}

export interface TableBodyProps {
  children: ReactNode
}

export interface TableFooterProps {
  children: ReactNode
}
