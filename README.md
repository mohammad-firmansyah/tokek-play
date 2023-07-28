# tokek-play

## How to run ?
- make sure you already install mongodb and nodejs in your computer
- make a new database in your mongodb named ```tokekplay_db```
- download the file and unzip it 
- open your terminal and change your directory to the directory of unziped folder previously
- run ```npm install``` on your terminal
- run ```npm start``` on your terminal


## API Reference

#### Product
- Product object
```
{
  id:String,
  title:String,
  url:String,
  videoId:String
}
```
#### Get product
```http
  GET /api/v1/product/videoId  
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `videoId` | `string` | **Required**. Your videoId |


#### Video
```
{
  id:String,
  url:String,
}
```
#### Get video
```http
  GET /api/v1/video
```

#### Comment
```
{
  id:String,
  username:String,
  Comment:String,
  videoId:String,
}
```
#### Get comment
```http
  GET /api/v1/comment/videoId
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `videoId` | `string` | **Required**. Your videoId |

#### Submit a comment
```http
  POST /api/v1/comment
```
#### Request body in raw json 

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your username |
| `comment` | `string` | **Required**. Your comment |
| `videoId` | `string` | **Required**. Your videoId |
