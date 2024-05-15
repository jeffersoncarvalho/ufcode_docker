import axios from 'axios'

let url_api = "http://aiuaba.quixada.ufc.br:3000/api"

export function listCourses() {
    return (
        axios({
            method: "GET",
            url: `${url_api}/course`,
            headers: {
                "token": ""
            }
        })
    )
}
export function listModules() {
    return (
        axios({
            method: "GET",
            url: `${url_api}/module`,
            headers: {
                "token": ""
            }
        })
    )
}

export function listProblems(_course, _module) {
    return (
        axios({
            method: "GET",
            url: `${url_api}/problem/${_course}/${_module}`,
            headers: {
                "token": ""
            }
        })
    )
}

export function listAllProblems() {
    return (
        axios({
            method: "GET",
            url: `${url_api}/problem`,
            headers: {
                "token": ""
            }
        })
    )
}

export function submission(data){
    return (
        axios({
            method: "POST",
            url: `${url_api}/submission`,
            data: data,
            headers: {
                "token": ""
            }
        })
    )
}
