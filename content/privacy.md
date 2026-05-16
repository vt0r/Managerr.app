---
title: "Privacy Policy"
description: "The privacy policy for the Managerr app"
summary: "We don't want your freakin' data. We never will. We absolutely despise data collection, ads, and tracking."
date: 2026-05-16T03:17:41-04:00
---

## Overview

Managerr is designed with your privacy in mind. The app does not collect, store, or transmit **any** personal data to servers operated by us.

## What We Don't Collect

We do not collect:

- Personal information (name, email address, etc)
- Usage analytics or telemetry
- Crash reports (on our servers) Reports may be sent to the App Store for our review, however
- Location data
- Any identifiers

## How the App Works

All data you enter into Managerr (server URLs, API keys, credentials) is stored locally on your device using iOS's secure storage. This data is transmitted directly from your device to the self-hosted services you configure (Radarr, Sonarr, Lidarr, Transmission). We **never** have access to this information, nor do we want it. We have enough infrastructure to manage already!

## Third-Party Services

The only third party service Managerr (optionally) accesses is the awesome and free API provided by `country.is`, which allows us to query peer IPs from Torrents to return their country codes (to display country flags next to the IPs in the peer list). The list of peer IPs in the active torrent detail sheet is the only data ever sent to `country.is`, so if you never open the peer view in any torrent details, you should never be communicating with that API. You can also disable the optional peer flags display in **Settings**, which will disable all communication with the `country.is` API service.

Otherwise, Managerr connects only to services you explicitly configure:

- **Radarr** - your self-hosted Radarr instance
- **Sonarr** - your self-hosted Sonarr instance
- **Lidarr** - your self-hosted Lidarr instance
- **Transmission** - your self-hosted Transmission instance

Each service's own privacy policy governs how it handles your data on its server.

## Children's Privacy

Managerr is not directed at children under 13, and we do not knowingly collect data from children.

## Changes to This Policy

We may update this policy from time to time. The date at the top of this page reflects the most recent revision. [The source file for this page](https://github.com/vt0r/Managerr.app/blob/main/content/privacy.md) and for every other page on this site are also available in source control, so you can view the full change history at any time.

## Contact

Questions about this privacy policy? [Open an issue on GitHub](https://github.com/vt0r/Managerr/issues/new).
