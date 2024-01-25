node {
    // Define the Docker image to use for the build
    def dockerImage = 'solution:latest'

    // Run the Docker container
    stage('Run Docker Container') {
        // Pull the Docker image
        docker.image(dockerImage).pull()

        // Run the Docker container
        def dockerContainer = docker.image(dockerImage).run('-v /var/run/docker.sock:/var/run/docker.sock', '-v /your/host/workspace:/your/container/workspace')

        // Store the container ID for later cleanup
        env.DOCKER_CONTAINER_ID = dockerContainer.id

        // Example command inside the Docker container
        dockerContainer.inside {
            sh 'ls -l /your/container/workspace'
            // Add more commands as needed
        }
    }

    // Add more stages as needed for your build steps

    // Cleanup: Stop and remove the Docker container
    stage('Cleanup') {
        script {
            // Stop and remove the Docker container
            if (env.DOCKER_CONTAINER_ID) {
                docker.container(env.DOCKER_CONTAINER_ID).stop()
                docker.container(env.DOCKER_CONTAINER_ID).remove(force: true)
            }
        }
    }
}
