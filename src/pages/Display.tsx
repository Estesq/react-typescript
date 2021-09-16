import React, { Component } from 'react'

class Display extends Component {
    state = {
        data: []
    }
    componentDidMount = () => {
        if (localStorage.getItem("db")) {
            let localdb: string = localStorage.getItem("db") as string
            let db: Array<object> = JSON.parse(localdb)
            let result: Array<object> = []
            console.log(db);

            db.reduce((res: any, value: any) => {
                if (!res[value.course]) {
                    res[value.course] = { course: value.course, students: 0 };
                    result.push(res[value.course])
                }
                res[value.course].students += parseInt(value.students)
                return res
            }, {})
            this.setState({ data: result })
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center align-items-center" style={{ height: "100vh" }}>
                    <div className="col-md-6">
                        <table className="table">
                            <tbody>
                                {this.state.data.map((el: any) => <tr key={el.course}>
                                    <td>{el.course}</td>
                                    <td>{el.students}</td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Display
