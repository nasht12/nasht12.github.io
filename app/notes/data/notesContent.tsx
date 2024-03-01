export const notesContent = [
  {
    title: "State of React",
    slug: "state-of-react",
    badge: "UI",
    url: "",
    description: (
      <>
        <p>
          <b>React Compiler:</b> React can sometime Re-render a lot more than
          necessary on state changes. And we tried to get around that by manual
          memoizing to tune how much react should re-render on these state
          changes The memoization clutters could be a thing of past. The React
          Compiler is here to ensure that your UI re-renders just the right
          amount. It knows enough about JavaScript and react that it takes care
          of the optimization. It&apos;s already the powerhouse behind
          <a href="https://www.instagram.com"> Instagram</a> in production! The
          React team has been busy, pushing the compiler across more surfaces at
          Meta and gearing up for its open-source debut.
        </p>
        <p>
          <b>Actions:</b> This changes how we move data between the client and
          server. The data handling could be seamless, and React handles
          everything from submissions to state updates. With useOptimistic, we
          can optimistically update the UI&apos;s which can makes snappier user
          experiences.
        </p>
        <p>
          <b>React Canary:</b> With React Canaries, React features are now
          developed openly with community input, transitioning from private,
          internal development at Meta to a more inclusive, public finalization
          process. We can now adopt newer stable features even before the stable
          semver release through canary.
        </p>
        <p>
          <b>React 19:</b> And with that React is transitioning to its next
          major version, React 19, after years of development. This update
          introduces new features that work across all environments and includes
          significant improvements like Asset Loading, Document Metadata, and
          support for Web Components. React 19, marking a major update due to
          potential breaking changes, focuses on finalizing these features,
          updating documentation, and preparing for release.
        </p>
      </>
    ),
  },
  {
    title: "Zero to Scalable",
    slug: "zero-to-scalable",
    badge: "System Design",
    description: (
      <>
        <p>
          <b>Cloning</b> Servers are hidden behind a load balancer. Different
          requests from the user could be handled by different servers based on
          the various factors, re-directed accordingly by load balancer. And
          independent of the server that handled the request, we should get the
          same response. This leads to first golden rule. All the server should
          have common code base and does not store any user related data like
          sessions, user profiles, history on local memory. Sessions need to
          stored in a centralized data store which should be accessible to all
          the servers. It can a external database or cache like reddis. Create
          an image from one these servers, lets call it the master image. And
          all the new instances would be based upon this.
        </p>
        <p>
          <b>Scalable Database</b> These steps essentially would let us scale
          our application horizontally. We handle thousands of concurrent
          requests but down the line we might reach a point where the
          application might slower and even might break down. Database is the
          culprit. Adding more cloned servers wouldn&apos;t solve this issue. Lets
          look at the ways to go about solving this. 1. Replicate the existing
          db into master-slave table where reads are handled by the slaves and
          writes to the master. Add more RAM to the master. With this path as
          our data gets bigger and bigger we might have to consider other
          techniques to keep up such as Sharding, normalization, SQL tuning. 2.
          Or we could re-normalize from the very beginning, which would be mean
          no more joins in queries. Based on your application data, using NoSQL
          databases might be easier to scale.
        </p>
        <p>
          <b>Caching</b> With scalable database we store terabytes of data
          breaking no sweat. But the users might still experience slow load
          times when trying to fetch/load data. We can solve this by
          implementing cache. In its simplest form, it&apos;s basically a key-value
          pair. And should be placed between our application and server storage.
          When the client/application is trying to retrieve something, it should
          first check the cache for that data. Only when not available should be
          hitting the storage/server. The reason we go through this extra step
          cause cache is crazy fast.
        </p>
        <p>
          <b>Asynchronism</b> Async workflows would help reduce the request time
          for expensive operations which would otherwise be done in-line.
        </p>
      </>
    ),
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    references: [
      "https://aws.amazon.com/builders-library/caching-challenges-and-strategies/",
      "https://web.archive.org/web/20221030091841/http://www.lecloud.net/tagged/scalability/chrono",
    ],
  },
  {
    title: "Monoliths are not dinosaurs",
    slug: "monoliths-are-not-dinosaurs",
    badge: "System Design",
    description: (
      <>
        <p>
          Consider the evolution of systems over time and make sure the
          foundation is such that you can change and expand them with the
          minimum number of dependencies. Event-driven architectures (EDA) and
          microservices are a good match for that.
        </p>
        <p>
          If you have the exact same scaling and performance requirements, same
          security vectors, and most importantly, are managed by a single team,
          it is a worthwhile effort to see if combining them simplifies your
          architecture.
        </p>
        <code>
          Monolith → Service-oriented architecture → Microservices →
          Microservices on shared infrastructure
        </code>
      </>
    ),
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Anti-fragility",
    slug: "anti-fragility",
    description: (
      <>
        <p>
          Three key anti-fragility features. <br />
          One, they don&apos;t scale up or slow down with load or stress.
          <br /> Two, they don&apos;t have modes, which means they do the same
          operations in all conditions.
          <br /> Three, if they have any variation, it&apos;s to do less work in
          times of stress so they can perform better when you need them most.
        </p>
        <p>
          Applying constant work patterns. Examples of constant work:
          <br /> Health checks - Hard to think of any function more critical
          than health checks. Instance, server looses power or networking,
          health checks notices and redirects the traffic elsewhere If DNS isn&apos;t
          sending traffic to healthy endpoints, there&apos;s no other opportunity to
          recover
        </p>
      </>
    ),
    badge: "System Design",
    references: [
      "https://www.allthingsdistributed.com/2023/11/standing-on-the-shoulders-of-giants-colm-on-constant-work.html",
      "https://aws.amazon.com/builders-library/caching-challenges-and-strategies/",
    ],
  },
  {
    title: "Monolith to microservices",
    slug: "monolith-to-microservices",
    badge: "System Design",
    description: (
      <>
        <p>
          # Rebuilding Netflix video processing pipelines with microservices
          **Reloaded** to **Cosmos** Reloaded was designed to convert the high
          quality movie assets received from the studio to the one we stream to
          our customers. Designed as a single monolithic system, single system
          that handled all media assets. As system complexity increased
          limitations began to show. - Coupled functionality. - Given the
          complexity and effort involved in integrating new modules, there&apos;s a
          natural bias towards augmenting existing modules rather than creating
          new ones. This means that when new functionalities are needed,
          developers might prefer to extend the capabilities of an existing
          module rather than build a new module from scratch. - Monolithic
          structure - Since all reload modules are in same code repo, there are
          no clear code boundaries and unintended code re-use. - Overlooks code
          isolation - Tight coupling and reduced development velocity. - Long
          release cycles - Increased risk of unintended production outages -
          Given the deployment size, debugging and rollbacks can be difficult -
          Release train: Take snapshots of all modules every 2 weeks. Promote
          them to release candidates. Each of those then had to go through
          exhaustive testing which took anothere 2 weeks. 2 - 4 weeks to reach
          production. As functionalities and scope of reloaded grew, new
          features contributions rate dropped. Many promising ideas were dropped
          because of the work load it might entail refactoring and over coming
          the architectural limitations. **Cosmos**: In addition to scalability
          and stability, cosmos intended to be flexible and increase feature
          development velocity. For this end, it was developed as a media
          centric microservices driven by workflows. Fine-grained services with
          each service focused on one functionality. Now they need to identify
          boundaries and define these services. Media assets Creation → Ingest →
          Delivery
        </p>
      </>
    ),
    url: "",
  },
  {
    title: "Inference is all you need",
    slug: "inference-is-all-you-need",
    badge: "AI",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    url: "",
  },
];
