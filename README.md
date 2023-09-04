AWS Stuff

```json{
    "repository": {
        "repositoryArn": "arn:aws:ecr:us-east-2:852117226269:repository/alexa-startrek",
        "registryId": "852117226269",
        "repositoryName": "alexa-startrek",
        "repositoryUri": "852117226269.dkr.ecr.us-east-2.amazonaws.com/alexa-startrek",
        "createdAt": "2023-09-04T14:03:46-04:00",
        "imageTagMutability": "MUTABLE",
        "imageScanningConfiguration": {
            "scanOnPush": false
        },
        "encryptionConfiguration": {
            "encryptionType": "AES256"
        }
    }
}```

Output from: ```aws lambda create-function \
  --function-name alexa-startrek \         
  --package-type Image \
  --code ImageUri=852117226269.dkr.ecr.us-east-2.amazonaws.com/alexa-startrek:latest \
  --role arn:aws:iam::852117226269:role/alexa-startrek-lambda```

```json{
    "FunctionName": "alexa-startrek",
    "FunctionArn": "arn:aws:lambda:us-east-2:852117226269:function:alexa-startrek",
    "Role": "arn:aws:iam::852117226269:role/alexa-startrek-lambda",
    "CodeSize": 0,
    "Description": "",
    "Timeout": 3,
    "MemorySize": 128,
    "LastModified": "2023-09-04T18:14:16.476+0000",
    "CodeSha256": "4e87651a8cb385bc8e2e0d84f85f17473c2bf1a2d160cbda81298271c12efd35",
    "Version": "$LATEST",
    "TracingConfig": {
        "Mode": "PassThrough"
    },
    "RevisionId": "1b3373a5-9fd8-4bdb-8b40-ca686b3aad7a",
    "State": "Pending",
    "StateReason": "The function is being created.",
    "StateReasonCode": "Creating",
    "PackageType": "Image",
    "Architectures": [
        "x86_64"
    ],
    "EphemeralStorage": {
        "Size": 512
    },
    "SnapStart": {
        "ApplyOn": "None",
        "OptimizationStatus": "Off"
    }
}```