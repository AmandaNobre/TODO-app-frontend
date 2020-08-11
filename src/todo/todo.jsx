import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForms from './todoForm'
import TodoList from './todoList'

const Url = "http://localhost:3003/api/todos"
export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = { description: "", list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }

    refresh(description = "") {
        const search = description ? `&description_regex=/${description}/` : ""
        axios.get(`${Url}?sort=-createdAt${search}`)
            .then(resp => this.setState({
                ...this.state,
                description,
                list: resp.data
            }))
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        axios.post(Url, { description })
            .then(resp => this.refresh())
    }

    handleRemove(todo) {
        axios.delete(`${Url}/${todo._id}`)
            .then(resp => this.refresh())
    }

    handleMarkAsDone(todo) {
        axios.put(`${Url}/${todo._id}`, { ...todo, done: true })
            .then(resp => this.refresh())
    }

    handleMarkAsPending(todo) {
        axios.put(`${Url}/${todo._id}`, { ...todo, done: false })
            .then(resp => this.refresh())
    }
    handleSearch() {
        this.refresh(this.state.description)
    }

    handleClear() {
        this.refresh()
    }
    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForms
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />
                <TodoList
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        )
    }
} 