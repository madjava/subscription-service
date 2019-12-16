## Start a Docker MySql instance

```bash
docker run --name subscription-as-a-service -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 3306:3306 -d mysql:5.7
```

```json
CREATE SCHEMA SubscriptionAsAService CHARACTER SET utf8mb4;
```