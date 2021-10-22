import React from 'react'
import { Card, CardContent, CardHeader} from "@material-ui/core"

const Activity = ( activity ) => {
    const {id, creatorId, isPublic, name, description } = activity.activity
    return (
        <Card>
        <CardHeader>{id}</CardHeader>
        <CardContent>{name}</CardContent>
        <CardContent>{description}</CardContent>
        </Card>
    )
}

export default Activity