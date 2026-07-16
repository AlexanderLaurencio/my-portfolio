"use client"
import Button from "@/components/button/Button"
import "./global.css"

export default function NotFound() {
    
    return(
        <main className="notFound">
            <h1>404</h1>
            <h2>This Page could not be found</h2>
            <Button className="goBack" onClick={() => window.history.back()}>Go back</Button>
        </main>
    )
}