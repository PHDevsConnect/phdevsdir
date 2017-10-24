# Here's an example of posting data to the api using json

- Paste the app link in the url bar, set the request method from "GET" to "POST"
- Now  go under HEADERS(just after "Authorization") and make sure content-Type is set application/json
- then go under BODY(just after Headers) to select ur dataType: select either "x-www-form-encoded" or "raw" [this example uses raw]
- After you have selected raw to your left appears a category of dataTypes, default is text, change it to "JSON(application/json)".
- enter data to be submited like so: (check code below)
```
{
	"first_name": "Jane",
	"last_name": "Joe",
	"email": "jane@email.com",
	"stack": "JS, PHP",
	"github_url": "github.com/janeDoe"
}

```
- Click the SEND button (behind the url bar) and it should return a response with "status : 200" if successful.