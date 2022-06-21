## Image Processing API

This is an API that resizes images to specified dimensions based on API requests.

## Dependencies

- Express
- TypeScript
- Prettier
- ESLint
- Sharp
- Supertest
- Jasmine

## Scripts

- ESLint ` npm run eslint`
- Prettier ` npm run prettier`
- Jasmine Test ` npm run test`
- Execute `npm run start`

## How it Works

1. Server starts listening for requests on PORT 5000
2. User starts by making a request to the API specifying the image name, width, and height.
3. If a resized image with specified dimensions exists, the server returns the requested image to the user.
4. If the requested image does not exist or the user has made an incorrect API call, the API sends error messages to the user.
5. If a resized image does not exist, the API checks if the requested image exists or not.
6. If requested image exists, the API resizes the image and sends it back to the user.

## API Health Check

Check if API is Working Successfully `https://localhost:5000/api/`

## Usage

1. Start by choosing one of the following images
   ` fjord encenadaport icelandwaterfall palmtunnel santamonica`
2. Send a request to the API specifying width and height
   `https://localhost:5000/api/images/?filename=fjord&width=500&height=500`
3. API returns a resized image with specified dimensions.

## Error Handling

1. Request to API with Non-existent Filename Returns Image Does not Exist
   `https://localhost:5000/api/images/?filename=haha&width=500&height=500`
2. Request to API with Incorrect Width or Height Returns Incorrect Width or Height
   `https://localhost:5000/api/images/?filename=fjord&width=-5&height=500`
3. Request to API without Parameters Returns Error Specifying Missing Parameter
   `https://localhost:5000/api/images/?filename=&width=500&height=500`
