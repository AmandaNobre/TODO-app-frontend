import React from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription } from './todoActions'

const TodoForm = props => {

    const KeyHandle = (e) => {
        if (e.key === "Enter") {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === "Escape") {
            props.handleClear()
        }
    }

    return (
        <div role="form" className="todoForm">
            <Grid cols='12 9 10'>
                <input id="descripption"
                    className="form-control"
                    placeholder="Adicone uma tarefa"
                    onKeyUp={KeyHandle}
                    onChange={props.changeDescription} />
            </Grid>

            <Grid cols='12 3 2'>
                <IconButton style="primary" icon="plus" onClick={props.handleAdd}></IconButton>
                <IconButton style="info" icon="search" onClick={props.handleSearch}></IconButton>
                <IconButton style="defalt" icon="close" onClick={props.handleClear}></IconButton>
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({ descripption: state.todo.descripption })
const mapStateToChange = dispach => bindActionCreators({ changeDescription }, dispach)
export default connect(mapStateToProps, mapStateToChange)(TodoForm)