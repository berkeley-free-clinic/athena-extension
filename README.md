# Berkeley Free Clinic - Athena Extension

## TLDR

This Chrome extension makes it quicker to enter records in the Athena intake form by making the following changes:
- reorders fields to match the paper intake form
- fills default values into fields Athena requires, but which we always enter the same value
- visually de-emphasizes (but does not disable) fields we do not care about

## Why make this thing?

The goal of this project is to reduce the ammount of time it takes from the moment a client enters the door to when they see a medic.

### Some context

GMHC shifts typically begin with a rush of clients waiting to be seen. Clients fill out a long intake form with many fields. Volunteers must transcribe data from each intake form into Athena. This process can take several minutes per client. This data-entry step is sometimes a bottleneck to client's being seen.

Removing friction from the intake step will allow us to see clients more quickly, saving them time.

## Ok so why a Chrome extension?

This browser extension intends to speed up intake by making the intake form on Athena mroe closely match the paper intkae form. This reduces the time volunteers spend scanning the paper form and digital form as they map data into the digital form. For example, it reorders the fields on the digital form to match the order on the paper form. It fills in default values to fields we must enter, but never change the vlaue of. It also fades back (but doesn't disable) fields we rarely use, enabling volunteers to focus on the fields that matter. All together these changes reduce friction so a volunteer can enter an intake form into Athena more quickly and with fewer mistakes, and get clients in the exam room more quickly.

## Why not just reorder the paper form?

The paper form is ordered and grouped accoring to what makes the most sense to the client. Clients shouldn't have to adapt to a chaotic form for the sake of Athena's limitations.