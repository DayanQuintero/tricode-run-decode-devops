import boto3

ec2 = boto3.client("ec2", region_name="us-east-2")

print("Instancias EC2 encontradas:")
response = ec2.describe_instances()

for reservation in response["Reservations"]:
    for instance in reservation["Instances"]:
        print("ID:", instance["InstanceId"])
        print("Estado:", instance["State"]["Name"])
        print("Tipo:", instance["InstanceType"])
        print("---")
