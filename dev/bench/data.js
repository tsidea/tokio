window.BENCHMARK_DATA = {
  "lastUpdate": 1610553491853,
  "repoUrl": "https://github.com/tsidea/tokio",
  "entries": {
    "rt_multi_threaded": [
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "766a89bf94631da0d30d43e962f35ee623b9f1d8",
          "message": "chore: prepare tokio-stream 0.1.2 (#3414)",
          "timestamp": "2021-01-12T21:38:51+01:00",
          "tree_id": "567616b1b295c7e0f49dd48d4414f83d38452588",
          "url": "https://github.com/tsidea/tokio/commit/766a89bf94631da0d30d43e962f35ee623b9f1d8"
        },
        "date": 1610553490459,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 193858,
            "range": "± 24388",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 724830,
            "range": "± 88925",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5951790,
            "range": "± 1086604",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21147978,
            "range": "± 3380773",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}