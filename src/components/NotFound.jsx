import {useRouteError} from "react-router-dom";

export default function NotFound() {
    const error = useRouteError()
    console.error(error)

    return (
        <div id="error-page" className="text-center mt-10">
            <h1>وای نه!</h1>
            <p>صفحه ای که دنبالش هستید را نمی توانم پیدا کنم</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

