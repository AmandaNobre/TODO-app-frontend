import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search } from './todoActions'

export class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.KeyHandle = this.KeyHandle.bind(this)
    }

    componenteWillMount() {
        this.props.search()
    }

    KeyHandle(e) {
        if (e.key === "Enter") {
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else if (e.key === "Escape") {
            this.props.handleClear()
        }
    }

    render() {
        return (
            <div role="form" className="todoForm">
                <Grid cols='12 9 10'>
                    <input id="descripption"
                        className="form-control"
                        placeholder="Adicone uma tarefa"
                        onKeyUp={this.KeyHandle}
                        onChange={this.props.changeDescription} />
                </Grid>

                <Grid cols='12 3 2'>
                    <IconButton style="primary" icon="plus" onClick={this.props.handleAdd}></IconButton>
                    <IconButton style="info" icon="search" onClick={this.props.handleSearch}></IconButton>
                    <IconButton style="defalt" icon="close" onClick={this.props.handleClear}></IconButton>
                </Grid>
            </div>
        )
    }
}
const mapStateToProps = state => ({ descripption: state.todo.descripption })
const mapStateToChange = dispach => bindActionCreators({ changeDescription, search }, dispach)
export default connect(mapStateToProps, mapStateToChange)(TodoForm)