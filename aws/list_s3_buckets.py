import boto3

s3 = boto3.client("s3")

print("Buckets disponibles en la cuenta AWS:")
response = s3.list_buckets()

for bucket in response["Buckets"]:
    print("-", bucket["Name"])
