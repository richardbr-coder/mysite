from twilio.rest import Client

client = Client("AC4dc763c08229c69b2fec59b83157cd20",
                "cee0d4485e7f9c015ce549585efb2737"
)

for msg in client.messages.list:
    print(msg.body)
    
