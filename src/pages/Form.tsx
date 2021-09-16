import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Form extends Component<any> {
    state = {
        course: null,
        students: null
    }

    handleInput = (e: any) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e: any) => {
        e.preventDefault()
        let data: Array<object>
        if (localStorage.getItem("db")) {
            let db: string = localStorage.getItem("db") as string
            data = JSON.parse(db)
        }
        else {
            data = []
        }
        data.push(this.state)
        localStorage.setItem("db", JSON.stringify(data))
        this.props.history.push('/display')

    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center align-items-center" style={{ height: "100vh" }}>
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="course">Select a course:</label>
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    name="course"
                                    onChange={this.handleInput}
                                >
                                    <option selected value="">--Select--</option>
                                    <option>Course 1</option>
                                    <option>Course 2</option>
                                    <option>Course 3</option>
                                </select>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="no_of_students">Number of students to enroll</label>
                                <input type="text" className="form-control" id="no_of_students" name="students" onChange={this.handleInput} />
                            </div>
                            <br />
                            <button className="btn btn-primary" type="submit">Enroll Student</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(Form)
