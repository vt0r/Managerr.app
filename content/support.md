---
title: "Support"
description: "Support information for the Managerr app"
summary: "This page tells you how you can get help or support with the Managerr app."
date: 2026-05-16T03:45:05-04:00
---

## Getting Help

The best way to get support is to [open an issue on GitHub](https://github.com/vt0r/Managerr/issues/new/choose). You can:

- **Report a bug** - describe what happened and how to reproduce it
- **Request a feature** - tell us what you'd like to see added
- **Ask a question** - not sure about something? Ask away

---

## Common Issues

### Connection problems

Make sure you've entered the full URL including protocol and port (if non-standard). Examples:

- `http://192.168.1.10:7878` - Radarr on its default port over HTTP
- `https://radarr.example.com` - Radarr behind a reverse proxy on port 443
- `https://192.168.1.10/radarr` - IP address with a URI path

Use the **Test Connection** button in Settings to verify your configuration before saving.

### A service tab isn't showing any data

Each service tab only displays data if that service is enabled and saved in Settings. Open the **Settings** tab, tap the service you want to configure, enter your details, and tap **Save**.

### Where do I find the API key / user and password?

For Radarr, Sonarr, and Lidarr, the API key can be found in each service's web UI under **Settings → General**.

For Transmission, enter your RPC credentials as `username:password` - leave it blank if RPC authentication is disabled.

## Open in Browser

If Managerr doesn't yet have a feature you need, each service tab has an **Open in Browser** button that takes you directly to that service's web UI. If you find yourself using it often for a specific workflow, please [let us know](https://github.com/vt0r/Managerr/issues/new/choose) - it helps us prioritize what to build next.

---

## Requirements

- iOS 18 or macOS 14 or later
- One or more self-hosted services: Radarr, Sonarr, Lidarr, or Transmission
