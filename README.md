# Chainlink External Adapter using Tor

Steps:
- Run a tor node with: `docker run -it -p 8118:8118 -p 9050:9050 dperson/torproxy`
- Run this adapter either with `node` or Docker, using the following environment variables:
    - `TOR_IP`: The IP of your tor container (defaults to 172.17.0.1)
    - `TOR_PORT`: The port of your tor container (defaults to 9050)
- Add the adapter to your Chainlink node (default port is 8080)
- Add a job to your Chainlink node using that adapter:

```json
{
  "initiators": [
    {
      "type": "web"
    }
  ],
  "tasks": [
    {
      "type": "tor"
    }
  ]
}
```

- Verify the adapter and tor service works by hitting the Run button in the GUI
- Click on the Job Run ID and expand out the Tor task, you should see an IP address under Values
