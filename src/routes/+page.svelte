<script>
  import { Img, Heading, Hr, P, Card, Badge } from 'flowbite-svelte';
  let hCard = false;
</script>

<Heading tag="h1" class="flex items-center" size="text-5xl"
  >Black Window <Badge class="text-2xl font-semibold ml-2">Beta</Badge></Heading
>
<P space="widest">"Streamline Your Deployment Process with a Comprehensive Deployment Portal</P>
<P space="widest">: Access Real-Time Insights, Metrics, and Timelines in One Place"</P>
<Hr class="my-8" width="w-64">introduce</Hr>
<br />
<P
  >A black window is an deployment portal that allows users to monitor and manage the deployment
  process of software applications, websites, or other digital products. It provides a real-time
  timeline view of the deployment, which enables users to track progress and identify any potential
  issues.</P
>

<P
  >In addition to the timeline view, a black window typically includes a dashboard that displays
  relevant metrics and statistics related to the deployment, such as the number of successful
  deployments, deployment failures, and the status of various components of the application.</P
>

<P
  >One of the key features of a black window is its filter search function, which enables users to
  quickly find specific deployments based on a variety of criteria, such as date, status, or
  application.</P
>

<P
  >Overall, a black window provides users with a centralized location to access all the information
  they need about their deployments. This can help streamline the deployment process, improve
  collaboration among team members, and ultimately lead to more efficient and successful
  deployments.</P
>
<Hr class="my-8" width="w-64">features</Hr>
<div
  style="display: flex; justify-content: space-between; gap: 20px; flex-wrap: wrap; align-items: flex-start;"
>
  <Card img="/.images/timeline.jpeg" href="/pages/timeline" horizontal reverse={hCard}>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Timeline</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      Provide real-time updates on the status of the deployment process, including the current
      stage, time remaining, and any issues that arise.
    </p>
  </Card>

  <Card img="/.images/dashboard.jpeg" href="/pages/dashboard" horizontal reverse={hCard}>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dashboard</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      Displays daily, weekly, and monthly metrics for each service in a bar graph format, including
      the number of deployments, rollbacks, and failures. This provides users with an at-a-glance
      view of the status of their deployments and any potential issues that may require attention.
    </p>
  </Card>

  <Card img="/.images/statistics.jpeg" href="/pages/statistics" horizontal reverse={hCard}>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Statistics</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      Provides insights on key deployment metrics, including deployment success rate, deployment
      frequency, time to deployment, error rate, rollback rate, and resource utilization. These
      metrics can help identify areas for improvement in the deployment process and ensure efficient
      and effective deployments.
    </p>
  </Card>
</div>
