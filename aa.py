def send_simple_message():
    print("Hello")
    return requests.post(
  		"https://api.mailgun.net/v3/squamedia.com/messages",
  		auth=("api", "YOUR_API_KEY"),
  		data={"from": "Excited User <mailgun@squamedia.com>",
  			"to": ["oluwabless@123.com", "YOU@squamedia.com"],
  			"subject": "Hello",
  			"text": "Testing some Mailgun awesomeness!"})