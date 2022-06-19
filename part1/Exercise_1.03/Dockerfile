FROM openjdk:18
COPY . /usr/src/stringGenerator
WORKDIR /usr/src/stringGenerator
RUN javac RandomStringGenerator.java
CMD ["java", "RandomStringGenerator"]